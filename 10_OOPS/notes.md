<!-- OOP

Object

collection of properties and methods
toLowerCase
why use OOP

parts of OOP

Object literal

Constructor function
Prototypes
Classes
Instances (new, this)
4 pillars

Abstraction Encapsulation Inheritance Polymorphism 

Got it 👍 Let’s go through each OOPs (Object-Oriented Programming) concept one by one with simple explanations and Java examples.

1. Abstraction
👉 Definition: Hiding implementation details and showing only the essential features.

Achieved using abstract classes or interfaces.

Example: You drive a car without knowing how the engine internally works.

Example in Java:

// Abstraction using abstract class
abstract class Vehicle {
    abstract void start(); // abstract method (no body)
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with a key");
    }
}

class Bike extends Vehicle {
    void start() {
        System.out.println("Bike starts with a button");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Car();
        Vehicle v2 = new Bike();
        v1.start();
        v2.start();
    }
}
✅ You only know the start() method works differently, but not the internal details.

2. Encapsulation
👉 Definition: Wrapping data (variables) and methods (functions) into a single unit (class).

Achieved using private variables with public getters/setters.

Example: ATM – you don’t directly access bank data; you interact via secure methods.

Example in Java:

class Account {
    private double balance; // data hidden (private)

    // Setter
    public void deposit(double amount) {
        balance += amount;
    }

    // Getter
    public double getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(5000);
        System.out.println("Balance: " + acc.getBalance());
    }
}
✅ Balance cannot be accessed directly, only through methods → data hiding + security.

3. Inheritance
👉 Definition: One class acquires the properties and behaviors of another class (“is-a” relationship).

Achieved using extends keyword.

Example: Dog is a Animal.

Example in Java:

class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal { // Dog inherits Animal
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited method
        d.bark(); // Own method
    }
}
✅ Dog got the eat() behavior from Animal.

4. Polymorphism
👉 Definition: One entity (method/object) behaves in many forms.

Types:

Compile-time (Method Overloading)

Runtime (Method Overriding)

(a) Method Overloading – Same method name, different parameters
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(5, 10));      // calls int version
        System.out.println(c.add(5.5, 4.5));  // calls double version
    }
}
(b) Method Overriding – Child class provides its own version of parent’s method
class Animal {
    void sound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Animal {
    void sound() { // overriding
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog(); // runtime polymorphism
        a.sound(); // Calls Dog's version
    }
}
✅ The method executed depends on the object at runtime.

🔑 Quick Summary:
Abstraction → Hides implementation (abstract class/interface).

Encapsulation → Data hiding with getters/setters.

Inheritance → Reuse parent class features (extends).

Polymorphism → Same name, many forms (overloading & overriding).
-->