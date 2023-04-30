import { BehaviorSubject } from "rxjs";

export interface INode {
  id: string;
  type: "text" | "node";
  isOpen?: boolean;
  isEditing?: boolean;
  text: string;
  children: INode[];
  isNewLine?: boolean;
}

export const data: INode = {
  id: "root",
  type: "node",
  text: "Summary",
  isOpen: true,
  children: [
    {
      id: "d6b6e43d-723d-4079-b3b7-13ff6d6059e6",
      type: "text",
      text: `In whatsoever mode, or by whatsoever means, our knowledge may relate to objects, it is at least quite clear that the only manner in which it immediately relates to them is by means of an intuition. To this as the indispensable groundwork, all thought points. But an intuition can take place only in so far as the object is given to us. This, again, is only possible, to man at least, on condition that the object affect the mind in a certain manner. The capacity for receiving representations (receptivity) through the mode in which we are affected by objects, objects, is called sensibility. By means of sensibility, therefore, objects are given to us, and it alone furnishes us with intuitions; by the understanding they are thought, and from it arise conceptions. But an thought must directly, or indirectly, by means of certain signs, relate ultimately to intuitions; consequently, with us, to sensibility, because in no other way can an object be given to us.

      The effect of an object upon the faculty of representation, so far as we are affected by the said object, is sensation. That sort of intuition which relates to an object by means of sensation is called an empirical intuition. The undetermined object of an empirical intuition is called phenomenon. That which in the phenomenon corresponds to the sensation, I term its matter; but that which effects that the content of the phenomenon can be arranged under certain relations, I call its form. But that in which our sensations are merely arranged, and by which they are susceptible of assuming a certain form, cannot be itself sensation. It is, then, the matter of all phenomena that is given to us à posteriori; the form must lie ready à priori for them in the mind, and consequently can be regarded separately from all sensation.
      
      I call all representations pure, in the transcendental meaning of the word, wherein nothing is met with that belongs to sensation. And accordingly we find existing in the mind à priori, the pure form of sensuous intuitions in general, in which all the manifold content of the phenomenal world is arranged and viewed under certain relations. This pure form of sensibility I shall call pure intuition. Thus, if I take away from our representation of a body all that the understanding thinks as belonging to it, as substance, force, divisibility, etc., and also whatever belongs to sensation, as impenetrability, hardness, colour, etc.; yet there is still something left us from this empirical intuition, namely, extension and shape. These belong to pure intuition, which exists à priori in the mind, as a mere form of sensibility, and without any real object of the senses or any sensation.
      
      The science of all the principles of sensibility à priori, I call transcendental æsthetic.[10] There must, then, be such a science forming the first part of the transcendental doctrine of elements, in contradistinction to that part which contains the principles of pure thought, and which is called transcendental logic.`,
      children: [],
    },
  ],
};

export const State = new BehaviorSubject(data);
