void setup() {
  // put your setup code here, to run once:
 Serial.begin(9600); 
}

void loop() {
  // put your main code here, to run repeatedly:
  while(true){
    Serial.println(12.45);
    delay(300)
    Serial.println(10.34);
   }

}
