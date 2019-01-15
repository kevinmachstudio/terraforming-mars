
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class FusionPower implements IProjectCard {
    public cost: number = 14;
    public tags: Array<Tags> = [Tags.SCIENCE, Tags.ENERGY, Tags.STEEL];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Fusion Power";
    public text: string = "Requires 2 power tags. Increase your energy production 3 steps";
    public description: string = "State of the art technology";
    public play(player: Player, game: Game): Promise<void> {
        return new Promise((resolve, reject) => {
            if (player.getTagCount(Tags.ENERGY) < 2) {
                reject("Requires 2 power tags");
                return;
            }
            player.energyProduction += 3;
            resolve();
        });
    }
}

