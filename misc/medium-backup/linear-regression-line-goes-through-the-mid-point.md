## Linear Regression Line Goes Through the Mean Point. But Why?

![](https://cdn-images-1.medium.com/max/2400/0*0ZFWhR1IsMKGj7O7.png)

When I first have come across the statement that the linear regression line must go through the mean point, I thought that it is plausible but definitely not intuitive.

After all, it is definitely not something you can do without proof or a calculation, as I cannot think of a way off the top of my head that guarantees that if the mean point is on the line, then, even though the error is zero for this point, the line will have the least mean square error (MSE).

I will try to get to the bottom of why that is the case exactly.

Ok, so we have our linear regression objective — to minimize the residual (or the distance from the regression line).

![The objective of linear regression](https://cdn-images-1.medium.com/max/2000/1*nDV8AcIzi8hkDJGqWo99vQ.png)

![Prediction](https://cdn-images-1.medium.com/max/2000/1*YGpg8CFaCij3GTB0m_428g.png)

So if the line passes through the mean, it means that the error/residual at that point is 0.

It’s still unclear whether that is the case, but let’s continue trying to reach the objective.

First, we want to express MSE.

![Mean Square Error (MSE)](https://cdn-images-1.medium.com/max/2000/1*b8q2DXQbLmn4ovXPGf_OOA.png)

Then, as we are trying to minimize the error, we need to take derivatives with respect to the parameters b0 and b1.

![](https://cdn-images-1.medium.com/max/2000/1*nYOs4G2-zOgFWsHxB0hDIg.png)

![](https://cdn-images-1.medium.com/max/2000/1*Wf0b4nAXqJcpK6RmCub9yA.png)

If you look at the partial derivative with respect to b0, it can be rewritten as:

![](https://cdn-images-1.medium.com/max/2000/1*jBLmZxrXOM1OuZld_WqjOQ.png)

Also, keeping in mind that:

![](https://cdn-images-1.medium.com/max/2000/1*-DRl95zkgFCyEMtHvu1rxA.png)

I can see that at the optimal _b0_ and *b1, *the mean point will have a zero residual.

As the conclusion, I would like to reiterate that if the statement that the regression line must go through the mean point is not obvious to you, then it also wasn’t for me. But luckily, it can be proven relatively simply, which I hope I was able to show in this article.

**Resources:
**I was using this resource as a reference. [http://www.stat.cmu.edu/~larry/=stat401/lecture-04.pdf](http://www.stat.cmu.edu/~larry/=stat401/lecture-04.pdf)
