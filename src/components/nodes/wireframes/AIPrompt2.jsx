import Browser from './Browser'
import {Footer, Hero4, AiPrompt2 as AiPromptSectino} from './sections'

const AIPrompt2 = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <AiPromptSectino />
      <Footer />
    </Browser>
  )
}

export default AIPrompt2