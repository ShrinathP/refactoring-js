For Large classes
YOu can 
- Extract Class
- Extract Superclass
- Replace Type Code with Subclasses

Extract Superclass
One type of code duplication occurs when two classes perform similar tasks in the same way, or perform similar tasks in different ways



# IMP: Data Classes
Use Data classes instead of raw records
Replace this
organization = {name: "Acme Gooseberries", country: "GB"};

by class Organization {
    constructor(data) {

    }
    //getters and setters
}

https://gist.github.com/rsmelo92/4bfae9a60db1fb7f72d0186465ad241c

All gists:
https://gist.github.com/rsmelo92


# Refused BEquest

Push down method
Push down field

https://gist.github.com/cs-cordero/3799f26699bdecdb286fd719f08122af#push-down-method-359
