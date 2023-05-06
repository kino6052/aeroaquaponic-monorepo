## Code is merely a tool for writing tests

If you’re a software developer, you’re probably used to the idea that writing code is the main goal of your job. But, have you ever stopped to think that maybe we’re putting too much emphasis on the code itself, and not enough on testing? In this article, we’ll chat about the usual way we write code, why it might be flawed, and suggest a cooler approach that puts tests in the spotlight.

![](https://cdn-images-1.medium.com/max/2000/1*c9aPb7Jfesbm71IZZuRORg.png)

## Intro

### The Usual Code Writing Dance

When we get a new project, we usually start by looking at the requirements. But let’s be honest, those requirements are often full of holes and they’re bound to change over time. So, we put our heads together, come up with a solution, and agree on the approach, language, tooling, and patterns we’ll use. Then we dive into writing the code. But, as we’re writing, we often don’t pay enough attention to testing.

Eventually, the requirements change, and we need to adjust our design or implementation. This is when things start to get messy. The new code might mess with the old behavior, be harder to write because of previous architecture decisions, or just be a nightmare to refactor due to a lack of tests.

### Why the Usual Approach Falls Short

This way of doing things has some issues. First, it’s not very scalable. When we make changes to the code, we don’t get immediate feedback on whether it’s still working correctly, which makes refactoring, introducing new patterns, or switching tools really difficult. Second, we tend to over-engineer things, adding unnecessary patterns upfront instead of letting them emerge naturally as the code grows and evolves.

## A Better Way to Do Things: Pure Function Black Box Testing

Let me introduce you to a more awesome approach: pure function black box testing. This method lets you write high-level tests to check what data should be generated given certain inputs. It’s even better than traditional Test-Driven Development (TDD), because the code itself becomes a means of writing tests. If your tests aren’t quite right, you can rewrite them to get the correct behavior as you write the code.

With this approach, you can cover a lot of code, making it easier to refactor, introduce new patterns, or even change the language and tools you’re using. And the best part? The code becomes less important than the tests, so you can toss it out and rewrite the whole thing from the ground up if necessary knowing exactly how it should work.

### Example

The main point of this approach is that it relies on snapshot testing because that’s how the process of writing code becomes a means of writing tests.

**Step 1: Initial test for capturing groups of digits**

Create a test file, for example phoneNumberParser.test.ts:

    import { parsePhoneNumber } from './phoneNumberParser';

    describe('parsePhoneNumber', () => {
      it('should capture groups of digits from US phone numbers', () => {
        const usNumber = '+1 555-555-5555';

        expect(parsePhoneNumber(usNumber)).toMatchInlineSnapshot();
      });

      it('should capture groups of digits from German phone numbers', () => {
        const germanNumber = '+49 170 1234567';

        expect(parsePhoneNumber(germanNumber)).toMatchInlineSnapshot();
      });
    });

**Step 2: Implement the initial function to capture groups of digits**

Now, create a file named phoneNumberParser.ts with the following content:

    export function parsePhoneNumber(phoneNumber: string): string[] {
      const digitGroups = phoneNumber.match(/\d+/g);
      return digitGroups || [];
    }

**Step 3: Update inline snapshots**

After running the tests, the inline snapshots will be generated. Update the phoneNumberParser.test.ts file with the generated snapshots:

    // ...previous imports and describe block

      it('should capture groups of digits from US phone numbers', () => {
        const usNumber = '+1 555-555-5555';

        expect(parsePhoneNumber(usNumber)).toMatchInlineSnapshot(`
          Array [
            "1",
            "555",
            "555",
            "5555",
          ]
        `);
      });

      it('should capture groups of digits from German phone numbers', () => {
        const germanNumber = '+49 170 1234567';

        expect(parsePhoneNumber(germanNumber)).toMatchInlineSnapshot(`
          Array [
            "49",
            "170",
            "1234567",
          ]
        `);
      });

**Step 4: Update the implementation**

I decided that I want it to be structured like an object instead of array.

Update the phoneNumberParser.ts file:

    export interface ParsedPhoneNumber {
      countryCode: string;
      areaCode?: string;
      firstPart?: string;
      secondPart?: string;
    }

    export function parsePhoneNumber(phoneNumber: string): ParsedPhoneNumber {
      const digitGroups = phoneNumber.match(/\d+/g) || [];
      const [countryCode, areaCode, firstPart, secondPart] = digitGroups;

      return {
        countryCode,
        areaCode,
        firstPart,
        secondPart,
      };
    }

**Step 5: Update inline snapshots**

    // ...previous imports and describe block

      it('should capture groups of digits from US phone numbers', () => {
        const usNumber = '+1 555-555-5555';

        expect(parsePhoneNumber(usNumber)).toMatchInlineSnapshot(`
          Object {
            "areaCode": "555",
            "countryCode": "1",
            "firstPart": "555",
            "secondPart": "5555",
          }
        `);
      });

      it('should capture groups of digits from German phone numbers', () => {
        const germanNumber = '+49 170 1234567';

        expect(parsePhoneNumber(germanNumber)).toMatchInlineSnapshot(`
          Object {
            "areaCode": "170",
            "countryCode": "49",
            "firstPart": "1234567",
            "secondPart": undefined,
          }
        `);
      });

### How is it different from TDD?

**Inline snapshots**

In traditional TDD, you would typically write the expected result directly in your test cases. With inline snapshots, you allow Jest (or another testing tool) to generate the expected result in the form of a snapshot, which is then stored within the test itself. This makes it easier to update the expected results when the implementation changes or when you’re refining your tests iteratively.

**Iterative refinement**

In this example, we started with a naive implementation and test, and then gradually refined both as we added support for more phone number formats. Traditional TDD usually emphasizes writing a failing test first, then implementing the functionality to make the test pass, and finally refactoring the code if necessary. In the example we provided, you focused on capturing the result through inline snapshots and refining the implementation to match the desired output.

**Emphasis on test evolution**

This approach focuses on the idea that tests can be updated and evolved alongside the implementation, making it easier to adapt to new requirements or edge cases. Traditional TDD tends to emphasize writing the test upfront and ensuring the implementation fulfills the test’s requirements. However, this example showcases a more flexible approach where tests and implementation can be updated together to better handle various scenarios.

## **Conclusion**

By treating code as a tool for writing tests and focusing on tests as the real deal in system functionality, we can build better software. Embracing pure function black box testing helps us create more robust, maintainable, and flexible codebases while reducing the risk of errors and improving system quality overall. So, let’s give it a try and see where it takes us!

I know this approach needs more examples and details, so stay tuned for a future article on “Pure Function Black Box UI Development.”
