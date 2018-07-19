import React from 'react'
import BoxBackground from '../BoxBackground'
import { VictoryPie } from 'victory'
import styles from './styles.module.css'
import colors from '../../shared/colorPalette'
import SubTitle from '../SubTitle';
import AnalizeLink from '../AnalizeLink';

const ProgressChartVictoryPorcentage = ({ data, paragraph }) => {
    return (
        <BoxBackground wrapperProps={{ style: { height: '100%' } }}>
            <div>
                <AnalizeLink />
                <div className={styles.ParagraphBlock}>
                    <SubTitle>{paragraph}</SubTitle>
                </div>
                <div className={styles.Wrapper}>
                    <div className={styles.Paragraph}>
                        <span>
                            {data}%
                        </span>
                    </div>
                    <VictoryPie
                        padAngle={0}
                        labelComponent={<span />}
                        innerRadius={70}
                        width={200} height={200}
                        data={[{ 'key': "", 'y': data }, { 'key': "", 'y': (100 - data) }]}
                        colorScale={[colors.orange.main, colors.grey.light]}
                    />
                </div>
            </div>
        </BoxBackground>
    )
}


export default ProgressChartVictoryPorcentage