## Slide Statements 
Sliding closely coupled statements/similar statements
 makes scope for creation of constructors

 # VIMP Example of slide statements
 https://improveandrepeat.com/2019/09/the-most-undervalued-refactoring-slide-statements/

 # Pull Up method
 Pulling up method to the base class, if its being used in other subclasses
 https://refactoring.guru/pull-up-method   **

 https://lostechies.com/seanchambers/2009/08/03/refactoring-day-3-pull-up-method/

 /*

From **
Here you may find that the method code uses fields and methods that exist only in subclasses and therefore aren’t available in the superclass. To solve this, you can:

For fields: use either Pull Up Field or Self-Encapsulate Field to create getters and setters in subclasses; then declare these getters abstractly in the superclass.

For methods: use either Pull Up Method or declare abstract methods for them in the superclass (note that your class will become abstract if it wasn’t previously).

Remove the methods from the subclasses.

 */