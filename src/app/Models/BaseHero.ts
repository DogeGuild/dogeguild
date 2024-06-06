import { Awakening } from "./Awakening";
import { Rarity } from "./Rarity";
import { Skill } from "./Skill";
import { Skin } from "./Skin";

export class BaseHero {
    id!: number;
    name!: string;
    altName!: string;
    faction!: string;
    role!: string;
    tierRating!: number;
    rarity!: Rarity;
    skills!: Skill[];
    awakenings!: Awakening[];
    baseAttack!: number;
    baseHP!: number;
    baseSpeed!: number;
    baseArmor!: number;
    availableSkins?: Skin[];
}