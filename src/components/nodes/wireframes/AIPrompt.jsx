import Browser from './Browser'
import {Footer, Hero4, AiPrompt as AiPromptSectino} from './sections'

const AIPrompt = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <AiPromptSectino />
      <Footer />
    </Browser>
  )
}

export default AIPrompt