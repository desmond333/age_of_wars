import styled from 'styled-components'

const RulesList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
`

const RulesListTitle = styled.h3`
    margin-bottom: 5px;
    text-align: left;
`

const RulesListItem = styled.li`
    width: 100%;
    max-width: 600px;
    text-align: left;
    margin-bottom: 5px;
`

export const RulesModalContent = () => (
    <>
        <RulesList>
            <RulesListTitle>Здания</RulesListTitle>
            <RulesListItem>Каждое здание производит конкретный тип юнитов.</RulesListItem>
            <RulesListItem>Здания всегда стоят одинаково (100 монет).</RulesListItem>
            <RulesListItem>
                Юниты могут быть использованы как в защите, так и в атаке.
            </RulesListItem>
            <RulesListItem>
                Income здание стоит 100 монет и дает прирост в 300 монет каждый ход.
            </RulesListItem>
            <RulesListItem>
                У каждого здания есть свой защитник за 100 монет, который не слабее самого сильного
                юнита в игре.
            </RulesListItem>
        </RulesList>
        <RulesList>
            <RulesListTitle>Юниты</RulesListTitle>
            <RulesListItem>
                Юниты могут быть атакующими или защитными в зависимости от их позиции.
            </RulesListItem>
            <RulesListItem>
                Стоимость юнитов зависит от их характеристик (в среднем 50 монет).
            </RulesListItem>
            <RulesListItem>Защитник для каждого здания стоит 100 монет.</RulesListItem>
        </RulesList>
        <RulesList>
            <RulesListTitle>Экономика</RulesListTitle>
            <RulesListItem>
                Деньги зарабатываются путем убийства чужих юнитов и уничтожения чужой базы.
            </RulesListItem>
            <RulesListItem>Income здание дает прирост в 300 монет каждый ход.</RulesListItem>
        </RulesList>
        <RulesList>
            <RulesListTitle>Альянсы</RulesListTitle>
            <RulesListItem>
                Каждый игрок может состоять в союзе с кем-либо и вместе с союзником по очереди
                атаковать врага.
            </RulesListItem>
        </RulesList>
    </>
)
