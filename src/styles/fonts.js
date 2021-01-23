import { css } from 'styled-components'

import MontserratExtraLight from 'src/fonts/Montserrat/Montserrat-ExtraLight.ttf'
import MontserratRegular from 'src/fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratMedium from 'src/fonts/Montserrat/Montserrat-Medium.ttf'
import MontserratSemibold from 'src/fonts/Montserrat/Montserrat-Semibold.ttf'

import MontserratExtraLightItalic from 'src/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'
import MontserratRegularItalic from 'src/fonts/Montserrat/Montserrat-RegularItalic.ttf'
import MontserratMediumItalic from 'src/fonts/Montserrat/Montserrat-MediumItalic.ttf'
import MontserratSemiboldItalic from 'src/fonts/Montserrat/Montserrat-SemiboldItalic.ttf'

import PoppinsExtraLight from 'src/fonts/Poppins/Poppins-ExtraLight.ttf'
import PoppinsRegular from 'src/fonts/Poppins/Poppins-Regular.ttf'
import PoppinsMedium from 'src/fonts/Poppins/Poppins-Medium.ttf'
import PoppinsSemibold from 'src/fonts/Poppins/Poppins-Semibold.ttf'

import PoppinsExtraLightItalic from 'src/fonts/Poppins/Poppins-ExtraLightItalic.ttf'
import PoppinsRegularItalic from 'src/fonts/Poppins/Poppins-RegularItalic.ttf'
import PoppinsMediumItalic from 'src/fonts/Poppins/Poppins-MediumItalic.ttf'
import PoppinsSemiboldItalic from 'src/fonts/Poppins/Poppins-SemiboldItalic.ttf'

import SpaceMonoRegular from 'src/fonts/SpaceMono/SpaceMono-Regular.ttf'
import SpaceMonoBold from 'src/fonts/SpaceMono/SpaceMono-Bold.ttf'

import SpaceMonoRegularItalic from 'src/fonts/SpaceMono/SpaceMono-RegularItalic.ttf'
import SpaceMonoBoldItalic from 'src/fonts/SpaceMono/SpaceMono-BoldItalic.ttf'


const MontserratNormalWeights = {
    200: MontserratExtraLight,  
    400: MontserratRegular,
    500: MontserratMedium,
    600: MontserratSemibold,
}

const MontserratItalicWeights = {
    200: MontserratExtraLightItalic,  
    400: MontserratRegularItalic,
    500: MontserratMediumItalic,
    600: MontserratSemiboldItalic,
}

const PoppinsNormalWeights = {
    200: PoppinsExtraLight,  
    400: PoppinsRegular,
    500: PoppinsMedium,
    600: PoppinsSemibold,
}

const PoppinsItalicWeights = {
    200: PoppinsExtraLightItalic,  
    400: PoppinsRegularItalic,
    500: PoppinsMediumItalic,
    600: PoppinsSemiboldItalic,
}

const SpaceMonoNormalWeights = {
    400: SpaceMonoRegular,
    700: SpaceMonoBold,
}

const SpaceMonoItalicWeights = {
    400: SpaceMonoRegularItalic,
    700: SpaceMonoBoldItalic,
}

const montserrat = {
    name: 'Montserrat',
    normal: MontserratNormalWeights,
    italic: MontserratItalicWeights,
}

const poppins = {
    name: 'Poppins',
    normal: PoppinsNormalWeights,
    italic: PoppinsItalicWeights,
}

const spaceMono = {
    name: 'Space Mono',
    normal: SpaceMonoNormalWeights,
    italic: SpaceMonoItalicWeights,
}

const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, format] of Object.entries(family[style])) {

        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${format}) format('ttf'),
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `
    }

    return styles;
}

const montserratNormal = createFontFaces(montserrat)
const montserratItalic = createFontFaces(montserrat, 'italic')

const poppinsNormal = createFontFaces(poppins)
const poppinsItalic = createFontFaces(poppins, 'italic')

const spaceMonoNormal = createFontFaces(spaceMono)
const spaceMonoItalic = createFontFaces(spaceMono, 'italic')

const Fonts = css`
    ${montserratNormal + montserratItalic + poppinsNormal + poppinsItalic + spaceMonoNormal + spaceMonoItalic}
`

export default Fonts