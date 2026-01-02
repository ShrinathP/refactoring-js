## Primitive obsession Fowler Page. 93

We see calculations that treat monetary amounts as plain numbers, or calculations of physical quantities that ignore units  or lots of code doing if (a < upper && a > lower).

Move out of the primitive cave

- *Replace Primitive with Object*
https://blog.ndepend.com/code-smell-primitive-obsession-and-refactoring-recipes/

Using Strongly typed IDs
https://andrewlock.net/using-strongly-typed-entity-ids-to-avoid-primitive-obsession-part-1/?ref=hackernoon.com


- *Replace Type Code with Subclasses*
class Appointment {

//Below 3 are type Codes
    public static final int VIRTUAL_CONFERENCE = 0;
    public static final int FACETOFACE = 1;
    public static final int TELE_CONFERENCE = 2;

    Appointment(int type) {
        this.type = type;
    }
}

# *Allowing for type codes is prone to errors as while calling someone can call wrong type Codes, there will only be Run Time Errors , no Compile Time Errors*
eg for something like 
Appointment app1 == new Appointment(1000) //no compile time error

So 
- Replace TypeCode with Subclasses
https://sapanparikh18.github.io/Refactoring-Part-2/

//Read Below later
Extension - Replace Type Code with Strategy/State
https://refactoring.guru/replace-type-code-with-state-strategy

