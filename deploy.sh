#!/bin/bash

mvn clean package -DskipTests

mv target/mobaserver.war target/mobaserver.jar

mv target/mobaserver.war.original target/mobaserver.war

rsync -azr target/mobaserver.* kojo@smartxms:/home/kojo/

#rsync -azr webapp/* kojo@smartxms:/home/kojo/webroot/moba-dev

