import type { QuestionLink } from "../types/types";

const questionLink1: QuestionLink = {
  question1: "Tube station two down from Cockfosters",
  question2: "Swedish multinational networking and telecommunications company",
  question3: "Racing car manufacturer",
  answer1: "Southgate",
  answer2: "Ericsson",
  answer3: "Mclaren",
  link: ["manager", "england", "football"],
};

const questionLink2: QuestionLink = {
  question1:
    "Which character did Danny DeVito play in the 1992 film Batman Returns",
  question2:
    "James “Clubber” Lang, Tommy Gunn and Ivan Drago are all opponents of which fictional character",
  question3:
    "French Riviera on the south coast of France, this is France’s fifth most populous city.",
  answer1: "penguin",
  answer2: "rocky",
  answer3: "nice",
  link: ["biscuit"],
};

const questionLink3: QuestionLink = {
  question1:
    "Melbourne is the capital and most populous city of this Australian state",
  question2:
    "Which comic book character has been portrayed by actors Jeremy Irons and Michael Caine?",
  question3:
    "This American singer-songwriter, commonly nicknamed the Piano Man had a UK number one single in 1983 with “Uptown Girl”",
  answer1: "victoria",
  answer2: "alfred",
  answer3: "billy joel",
  link: ["monarchs", "british", "kings", "queens"],
};
export const questionBank = [questionLink1, questionLink2, questionLink3];
