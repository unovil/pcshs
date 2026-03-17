import type { Pathname, RouteId } from "$app/types";
import { AtomIcon, BotIcon, CalculatorIcon, DnaIcon, type Icon } from "@lucide/svelte";

export const researchTypes: {
    name: string;
    icon: typeof Icon;
    link: RouteId | Pathname;
}[] = [
    {
        name: "Physical Science",
        icon: AtomIcon,
        link: "/"
    },
    {
        name: "Life Science",
        icon: DnaIcon,
        link: "/"
    },
    {
        name: "Data Science",
        icon: CalculatorIcon,
        link: "/"
    },
    {
        name: "Robotics & Intelligent Machines",
        icon: BotIcon,
        link: "/"
    }
]