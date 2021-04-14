import { css } from 'styled-components'

import WorkSansThin from 'fonts/WorkSans/WorkSans-Thin.ttf'
import WorkSansExtraLight from 'fonts/WorkSans/WorkSans-ExtraLight.ttf'
import WorkSansLight from 'fonts/WorkSans/WorkSans-Light.ttf'
import WorkSansRegular from 'fonts/WorkSans/WorkSans-Regular.ttf'
import WorkSansMedium from 'fonts/WorkSans/WorkSans-Medium.ttf'
import WorkSansSemiBold from 'fonts/WorkSans/WorkSans-SemiBold.ttf'
import WorkSansBold from 'fonts/WorkSans/WorkSans-Bold.ttf'
import WorkSansExtraBold from 'fonts/WorkSans/WorkSans-ExtraBold.ttf'
import WorkSansBlack from 'fonts/WorkSans/WorkSans-Black.ttf'

import WorkSansThinItalic from 'fonts/WorkSans/WorkSans-ThinItalic.ttf'
import WorkSansExtraLightItalic from 'fonts/WorkSans/WorkSans-ExtraLightItalic.ttf'
import WorkSansLightItalic from 'fonts/WorkSans/WorkSans-LightItalic.ttf'
import WorkSansRegularItalic from 'fonts/WorkSans/WorkSans-RegularItalic.ttf'
import WorkSansMediumItalic from 'fonts/WorkSans/WorkSans-MediumItalic.ttf'
import WorkSansSemiBoldItalic from 'fonts/WorkSans/WorkSans-SemiBoldItalic.ttf'
import WorkSansBoldItalic from 'fonts/WorkSans/WorkSans-BoldItalic.ttf'
import WorkSansExtraBoldItalic from 'fonts/WorkSans/WorkSans-ExtraBoldItalic.ttf'
import WorkSansBlackItalic from 'fonts/WorkSans/WorkSans-BlackItalic.ttf'

const WorkSansNormalWeights = {
    100: WorkSansThin,  
    200: WorkSansExtraLight,  
    300: WorkSansLight,  
    400: WorkSansRegular,
    500: WorkSansMedium,
    600: WorkSansSemiBold,
    700: WorkSansBold,
    800: WorkSansExtraBold,
    900: WorkSansBlack
}

const WorkSansItalicWeights = {
    100: WorkSansThinItalic,  
    200: WorkSansExtraLightItalic,  
    300: WorkSansLightItalic,  
    400: WorkSansRegularItalic,
    500: WorkSansMediumItalic,
    600: WorkSansSemiBoldItalic,
    700: WorkSansBoldItalic,
    800: WorkSansExtraBoldItalic,
    900: WorkSansBlackItalic
}

const workSans = {
    name: 'Work Sans',
    normal: WorkSansNormalWeights,
    italic: WorkSansItalicWeights,
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

const workSansNormal = createFontFaces(workSans)
const workSansItalic = createFontFaces(workSans, 'italic')


const Fonts = css`
    ${workSansNormal + workSansItalic}
`

export default Fonts