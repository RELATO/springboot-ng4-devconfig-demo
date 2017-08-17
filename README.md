# springboot-ng4-devconfig-demo
Spring-boot 1.5.4 angular4 development configuration demo

### 1o. build angular frontend 
```
cd webui
ng build -prod
```

### 2o. build spring-boot backend 
```
cd ..
mvn clean package
```

### 3o. running frontend served by backend 
```
java -jar target/springdemo-0.0.1.jar

http://localhost:9119
```

### Expected result

# Beer List

Kentucky Brunch Brand Stout
Good Morning
Very Hazy
King Julius

