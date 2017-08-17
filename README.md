# springboot-ng4-devconfig-demo
Spring-boot 1.5.4 angular4 development configuration demo

### 1o. build angular frontend 
```
git clone https://github.com/RELATO/springboot-ng4-devconfig-demo.git
cd webui
yarn install
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

open browser ---> http://localhost:9119
```

### Expected result

# Beer List

### Kentucky Brunch Brand Stout
### Good Morning
### Very Hazy
### King Julius

## Technical tips

### See proxy.conf.json in webui folder

The client at 4200 port will proxy any “/api/” requests to the “backend” server at “localhost: 9119”.
``` 
{
  "/api": {
    "target": "http://localhost:9119",
    "secure": false
  }
}

```

### See application.properties in src/main/resources folder
This instructs spring to lookup for static content at...
```
server.contextPath=/
server.port=9119
spring.resources.static-locations=classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,classpath:/webui/
```

### See pom.xml in [project] folder
Ideally, for any non-trivial use case, you should build your client and server independently, and deploy client bundles (static resources) to your choice of web server such as Apache, NGINX, IIS etc., and application server running your choice of servlet container such as Tomcat, Jetty, etc.
However, if you need something quick, you can use the following steps to generate a single deployable war/jar file.

1. Build Client - Go to “webui” project directory and run “ng build -prod” command.

2. Build Server to generate a deployable war/jar. We can do this by right clicking on the “webui” project” and clicking Run As -> Maven Install. But before we do this, we have to modify our pom.xml to include static resources from the “webui” project as shown below.
```
            <!-- *** RESOURCE PLUGIN *** -->
            <plugin>
                <artifactId>maven-resources-plugin</artifactId>
                <version>3.0.2</version>
                <executions>
                    <!-- copy webui dist folder to target/classes/static -->
                    <execution>
                        <id>copy-resources</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.outputDirectory}/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${project.basedir}/webui/dist</directory>
                                    <excludes>
                                        <exclude>*.gz</exclude>
                                    </excludes>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
        <!-- </pluginManagement> -->
```
After you will see something like this: ( I.E. the same content at webui/dist folder after running "ng build -prod" command )
```
-rw-r--r--   1 home  staff       0 17 Ago 11:34 3rdpartylicenses.txt
-rw-r--r--   1 home  staff    5430 17 Ago 11:34 favicon.ico
-rw-r--r--   1 home  staff     672 17 Ago 11:34 index.html
-rw-r--r--   1 home  staff    1460 17 Ago 11:34 inline.e9174c630371efb68e5f.bundle.js
-rw-r--r--   1 home  staff    5151 17 Ago 11:34 main.a2863d0e717153382843.bundle.js
-rw-r--r--   1 home  staff   63071 17 Ago 11:34 polyfills.f77454f386e1728adda2.bundle.js
-rw-r--r--   1 home  staff       0 17 Ago 11:34 styles.d41d8cd98f00b204e980.bundle.css
-rw-r--r--   1 home  staff  326244 17 Ago 11:34 vendor.a120b16e335ee6542f2f.bundle.js

```


## Sources:
https://dzone.com/articles/angular-2-and-spring-boot-development-environment
https://developer.okta.com/blog/2017/04/26/bootiful-development-with-spring-boot-and-angular
http://websystique.com/spring-boot/spring-boot-angularjs-spring-data-jpa-crud-app-example/
