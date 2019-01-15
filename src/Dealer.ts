
import { AdaptationTechnology } from "./cards/AdaptationTechnology";
import { AdvancedEcosystems } from "./cards/AdvancedEcosystems";
import { AerobrakedAmmoniaAsteroid } from "./cards/AerobrakedAmmoniaAsteroid";
import { AntiGravityTechnology } from "./cards/AntiGravityTechnology";
import { AquiferPumping } from "./cards/AquiferPumping";
import { BiomassCombustors } from "./cards/BiomassCombustors";
import { CaretakerContract } from "./cards/CaretakerContract";
import { Cartel } from "./cards/Cartel";
import { CEOsFavoriteProject } from "./cards/CEOsFavoriteProject";
import { ConvoyFromEuropa } from "./cards/ConvoyFromEuropa";
import { CorporateStronghold } from "./cards/CorporateStronghold";
import { DesignedMicroOrganisms } from "./cards/DesignedMicroOrganisms";
import { EnergySaving } from "./cards/EnergySaving";
import { Flooding } from "./cards/Flooding";
import { FuelFactory } from "./cards/FuelFactory";
import { FusionPower } from "./cards/FusionPower";
import { GreatDam } from "./cards/GreatDam";
import { HeatTrappers } from "./cards/HeatTrappers";
import { Herbivores } from "./cards/Herbivores";
import { IceCapMelting } from "./cards/IceCapMelting";
import { ImportedGHG } from "./cards/ImportedGHG";
import { ImportedNitrogen } from "./cards/ImportedNitrogen";
import { ImportOfAdvancedGHG } from "./cards/ImportOfAdvancedGHG";
import { IndenturedWorkers } from "./cards/IndenturedWorkers";
import { IndustrialMicrobes } from "./cards/IndustrialMicrobes";
import { Insects } from "./cards/Insects";
import { Insulation } from "./cards/Insulation";
import { InventionContest } from "./cards/InventionContest";
import { InvestmentLoan } from "./cards/InvestmentLoan";
import { LagrangeObservatory } from "./cards/LagrangeObservatory";
import { LargeConvoy } from "./cards/LargeConvoy";
import { LavaFlows } from "./cards/LavaFlows";
import { Lichen } from "./cards/Lichen";
import { Livestock } from "./cards/Livestock";
import { LocalHeatTrapping } from "./cards/LocalHeatTrapping";
import { MagneticFieldDome } from "./cards/MagneticFieldDome";
import { MagneticFieldGenerators } from "./cards/MagneticFieldGenerators";
import { MicroMills } from "./cards/MicroMills";
import { MoholeArea } from "./cards/MoholeArea";
import { NitriteReducingBacteria } from "./cards/NitriteReducingBacteria";
import { NitrophilicMoss } from "./cards/NitrophilicMoss";
import { NoctisFarming } from "./cards/NoctisFarming";
import { OlympusConference } from "./cards/OlympusConference";
import { Pets } from "./cards/Pets";
import { PermafrostExtraction } from "./cards/PermafrostExtraction";
import { Plantation } from "./cards/Plantation";
import { PowerInfrastructure } from "./cards/PowerInfrastructure";
import { PowerPlant } from "./cards/PowerPlant";
import { PowerSupplyConsortium } from "./cards/PowerSupplyConsortium";
import { ProtectedHabitats } from "./cards/ProtectedHabitats";
import { ProtectedValley } from "./cards/ProtectedValley";
import { RadSuits } from "./cards/RadSuits";
import { Satellites } from "./cards/Satellites";
import { Shuttles } from "./cards/Shuttles";
import { SoilFactory } from "./cards/SoilFactory";
import { StandardTechnology } from "./cards/StandardTechnology";
import { StripMine } from "./cards/StripMine";
import { SymbioticFungus } from "./cards/SymbioticFungus";
import { TectonicStressPower } from "./cards/TectonicStressPower";
import { TitaniumMine } from "./cards/TitaniumMine";
import { TundraFarming } from "./cards/TundraFarming";
import { WaterSplittingPlant } from "./cards/WaterSplittingPlant";
import { WavePower } from "./cards/WavePower";
import { Windmills } from "./cards/Windmills";

import { IProjectCard } from "./cards/IProjectCard";

const ALL_CARDS: Array<IProjectCard> = [
    new AdaptationTechnology(),
    new AdvancedEcosystems(),
    new AerobrakedAmmoniaAsteroid(),
    new AntiGravityTechnology(),
    new AquiferPumping(),
    new BiomassCombustors(),
    new CaretakerContract(),
    new Cartel(),
    new CEOsFavoriteProject(),
    new ConvoyFromEuropa(),
    new CorporateStronghold(),
    new DesignedMicroOrganisms(),
    new EnergySaving(),
    new Flooding(),
    new FusionPower(),
    new FuelFactory(),
    new GreatDam(),
    new HeatTrappers(),
    new Herbivores(),
    new IceCapMelting(),
    new ImportedGHG(),
    new ImportedNitrogen(),
    new ImportOfAdvancedGHG(),
    new IndenturedWorkers(),
    new IndustrialMicrobes(),
    new Insects(),
    new Insulation(),
    new InventionContest(),
    new InvestmentLoan(),
    new LagrangeObservatory(),
    new LargeConvoy(),
    new LavaFlows(),
    new Lichen(),
    new Livestock(),
    new LocalHeatTrapping(),
    new MagneticFieldDome(),
    new MagneticFieldGenerators(),
    new MicroMills(),
    new MoholeArea(),
    new NitriteReducingBacteria(),
    new NitrophilicMoss(),
    new NoctisFarming(),
    new OlympusConference(),
    new PermafrostExtraction(),
    new Pets(),
    new Plantation(),
    new PowerInfrastructure(),
    new PowerPlant(),
    new PowerSupplyConsortium(),
    new ProtectedHabitats(),
    new ProtectedValley(),
    new RadSuits(),
    new Satellites(),
    new Shuttles(),
    new SoilFactory(),
    new StandardTechnology(),
    new StripMine(),
    new SymbioticFungus(),
    new TectonicStressPower(),
    new TitaniumMine(),
    new TundraFarming(),
    new WaterSplittingPlant(),
    new WavePower(),
    new Windmills()
];

export class Dealer {
    public getCards(count: number): Array<IProjectCard> {
        return [];
    }    
}
