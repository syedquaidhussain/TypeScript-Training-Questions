

type  ExtractVariants<T , K extends keyof T>  = T[K] extends ReadonlyArray<infer U>  ?
                                                   U extends {variant:infer U} ? 
                                                   U:
                                                   never
                                                   :never

const componentOption = {
  button: [
    {
      title: "Button Primary",
      image: "/assets/buttonV1.png",
      variant: "ButtonV1",
    },
    {
      title: "Button Secondary",
      image: "/assets/buttonV2.png",
      variant: "ButtonV2",
    },
    {
        title: "Button Tertiary",
        image: "/assets/buttonV3.png",
        variant: "ButtonV3",
    },
],
header: [
    {
      title: "Header Primary",
      image: "/assets/headerV1.png",
      variant: "HeaderV1",
    },
    {
      title: "Header Secondary",
      image: "/assets/headerV2.png",
      variant: "HeaderV2",
    },
  ],
} as const;








type HeaderVariants = ExtractVariants<typeof componentOption, "header">; // "HeaderV1" | "HeaderV2"
type ButtonVariants = ExtractVariants<typeof componentOption, "button">; // "ButtonV1" | "ButtonV2" | "ButtonV3"