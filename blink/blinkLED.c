#include <stdio.h>
#include <wiringPi.h>

int initLEDs() {
  if (wiringPiSetup() == -1) {
    printf("uh oh");
  }
  pinMode(0, OUTPUT);
  pinMode(2, OUTPUT);
}

int toggleLED(int num) {
  digitalWrite(num, ((digitalRead(num) + 1) % 2));
}

void blinkLEDs() {
  digitalWrite(0, 0);
  digitalWrite(2, 1);
  for (;;) {
    toggleLED(0);
    toggleLED(2);
    delay(500);
  }
}

int main(void) {
  initLEDs();
  while (1) {
    blinkLEDs();
  }
  return 0;
}

