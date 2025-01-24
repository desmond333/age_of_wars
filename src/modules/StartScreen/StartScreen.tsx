import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { RulesModalContent } from './Rules'
import { CreatorModalContent } from './Creator'
import { initialStartGamePhrases } from '../../mock/mock'
import { getRandomPhrase } from '../../utils/utilsRandomFunc.ts'

interface StartScreenProps {
    onSelectCampaign: () => void
    onSelectSkirmish: () => void
}

const StartScreenContainer = styled.div`
    text-align: center;
    padding: 20px;
`

const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 20px;
`

const ModeSelection = styled.div`
    margin-top: 20px;
`

export const StartScreen: React.FC<StartScreenProps> = ({ onSelectCampaign, onSelectSkirmish }) => {
    const [openRules, setOpenRules] = useState(false)
    const [openCreator, setOpenCreator] = useState(false)

    const handleOpenRules = () => setOpenRules(true)
    const handleCloseRules = () => setOpenRules(false)
    const handleOpenCreator = () => setOpenCreator(true)
    const handleCloseCreator = () => setOpenCreator(false)

    return (
        <StartScreenContainer>
            <Title>{getRandomPhrase(initialStartGamePhrases)}</Title>

            <ModeSelection>
                <Button variant="outlined" onClick={onSelectCampaign}>
                    Начать кампанию
                </Button>
                <Button variant="outlined" onClick={onSelectSkirmish}>
                    Начать схватку
                </Button>
                <Button variant="outlined" onClick={handleOpenRules}>
                    Правила игры
                </Button>
                <Button variant="outlined" onClick={handleOpenCreator}>
                    Создатель игры
                </Button>
            </ModeSelection>

            <Dialog open={openRules} onClose={handleCloseRules}>
                <DialogTitle>Правила игры</DialogTitle>
                <DialogContent>
                    <RulesModalContent />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRules}>Закрыть</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openCreator} onClose={handleCloseCreator}>
                <DialogTitle>Создатель игры</DialogTitle>
                <CreatorModalContent />
                <DialogActions>
                    <Button onClick={handleCloseCreator}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </StartScreenContainer>
    )
}
