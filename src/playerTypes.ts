import { DifficultyKeys } from './types.ts'

export type Player = {
    id: string
    atkUnits: Unit[]
    defUnits: Unit[]
    coins: number
    base: Base
    isActive: boolean
    isLeftSide: boolean
    difficulty: DifficultyKeys | null
    team: number
    details: PlayerDetails
    isHumanPlayer?: boolean
}

export type PlayerDetails = {
    name: string
    color: string
    bank: number
    favoriteUnit: string
    description: string
    phrases: {
        start: string
        inGame: string
        defeat: string
    }
}

export type Base = {
    isDestroyed: boolean
    buildings: AllBuildings
}

export type Building = {
    name: string
    cost: number
    health: number
    maxHealth: number
    guardian: Unit | null
    isPurchased: boolean
}

export type AllBuildings = {
    income: Building
    infantry: Building
    ranged: Building
    monster: Building
    air: Building
}

export type UnitType = keyof Omit<AllBuildings, 'income'>

export type Unit = {
    id: number
    name: string
    unitType: UnitType
    cost: number
    health: number
    maxHealth: number
    damage: number
    maxRange: number
    criticalDamage: number
    criticalChance: number
    level: number
    ability: string
    abilityDescription: () => 'Понижает дальность атаки врага-лучника'
    color: string
    imageUrl: {
        standing: string
        active: string
    }
    description: string
}
