FROM maven:3.9.9-amazoncorretto-21-alpine AS maven-build
WORKDIR /ToDoApp
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package

FROM node:22.11 AS vite-build
WORKDIR /Frontend
COPY Frontend/package.json .
COPY Frontend/package-lock.json .
RUN npm install
COPY Frontend/ .
RUN npm run build

FROM openjdk:21-jdk AS final
WORKDIR /ToDoApp
COPY --from=maven-build /ToDoApp/target/todoapp-0.0.1-SNAPSHOT.jar /app/backend.jar
COPY --from=vite-build /Frontend/dist /app/Frontend
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/backend.jar"]
