import { Avatar, DialogContent } from '@mui/material'
import CreatorImage from '../../assets/creator.png'

export const CreatorModalContent = () => (
    <DialogContent>
        <Avatar
            alt="Артем Романов"
            src={CreatorImage}
            sx={{
                width: 200,
                height: 200,
                margin: '0 auto 20px auto',
                display: 'block',
                borderRadius: 0,
            }}
        />
        <p>Создатель игры: Артем Романов</p>
        <p>
            Артем — талантливый фронтенд разработчик с более чем 4-летним опытом в индустрии. Он
            пока не известен, но все впереди. Эта игра — результат его страсти к созданию уникальных
            игровых миров и захватывающих игровых механик.
        </p>
    </DialogContent>
)
