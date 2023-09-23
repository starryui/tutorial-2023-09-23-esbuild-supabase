import { StarryUITheme, applyTheme } from '@starryui/theme'
import { column } from '@starryui/layout'
import { themeMidnight } from '@starryui/theme-midnight'
import { withTextContent } from '@starryui/traits'

const theme: StarryUITheme = themeMidnight

const mainArea = applyTheme(theme, column).add(withTextContent('Hello world'))()

document.body.appendChild(mainArea)
