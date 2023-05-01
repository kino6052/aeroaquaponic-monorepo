
## Don’t do micro-frontends, make good monorepos instead

I’ve worked at many companies, and I have seen various practices when it comes to deploying application code.

### Regression and integration testing is the main bottleneck in application deployment.

One pattern that I notice most often is that regression testing takes the most time and effort, especially if there is a significant portion of manual testing.

As developers work across different projects that make up the entire application, all the code needs to be tested and merged into a single trunk that needs to be deployed. Often there are a lot of problems putting all these things together as code relies on integration with other parts of the application.

### How about microservices?

There is a tendency to think that since the whole application gets stuck in the release cycle when it comes to integration and regression testing, you need to decouple your part of the app, make a microservice out of it and have a separate release cycle for it.

Even though there is some sense to it, unfortunately, this would not address the main bottleneck of the application release cycle — integration and regression testing, but would actually introduce more complexity for integrating all the pieces and testing them together.

### **The answer is a well-structured monorepo and good test coverage**

There is actually an easier solution — monorepo.

However, I’ve seen monorepos that aren’t real monorepos, as they connect just a couple of projects that don’t really share any modules with each other and mostly import them from npm package registry.

The point of a good monorepo is that it contains all of the code. So if you have a web app, all of the client web app logic (potentially server too) is contained inside of it. If it is JavaScript project, then it should be converted to TypeScript.

All this allows for:

**Immediate correctness feedback:**

* Ability to run tests for every repo; ease of refactoring and introducing modules; often a good guarantee that integration and regression is not going to find bugs;

* Type safety: TypeScript errors across all projects and dependencies

**Ease of synchronization:**

* No need to remember to update packages

These properties guarantee that the main bottleneck would be easier to pass, as the majority of correctness and synchronization could be checked in the code.

### Conclusion

I wanted to demonstrate that microservices are not necessarily the best way to resolve the bottlenecks in the release cycle, and instead proper monorepo and testing in the codebase should be introduced.
