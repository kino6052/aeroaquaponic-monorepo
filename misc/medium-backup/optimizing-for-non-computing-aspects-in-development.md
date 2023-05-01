## Optimizing for Non-computer Oriented Constraints in Software Development

The reason why computation needs to be understood and elaborated on top of easily is because writing programs is a very costly activity in terms of time and effort, and, because of it, money. If we had unlimited time and effort was minimal, every software could have been developed from scratch every time.

However, it becomes impractical given these constraints. These constraints enforce programmers to consider minimally invasive ways of altering software. This is where software design and architecture comes into the picture.

Before going deep into the non-computer oriented constraints in software development I would like to give a few metaphors.

Consider the difference between the alphabet and hieroglyphics. Hieroglyphics in the Chinese language describe syllables. Syllables are composed of smaller units, which can be described by letters. Because every syllable is a combination of letters where order matters, it is easy to see that the number of combinations is going to be greater than the number of units being combined.

Just like with software, if we want to extend our hieroglyphic system because it is no longer enough for our purposes, we will have to iterate over all of the hieroglyphs to make sure we don’t duplicate a hieroglyph. This requires the strenuous effort of both memorizing and using the system. There is not the case with the alphabet, however.

The addition of a new sound that can be described as a new letter of an alphabet will correspond to a substantial amount of symbols added to the hieroglyphics system.

Software is also described by a set of primitives that are combined. However, because on different levels of abstractions, some aggregations of the smaller primitives can also be considered as constant and immutable, and these aggregations can in turn be combined in order to add or update functionality on that level.
