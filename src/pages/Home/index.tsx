import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <form action="">
            <FormContainer>
            
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput id="task" list="taskSuggestions" placeholder="Dê um nome para o seu projeto"/>

            <datalist id="taskSuggestions">
                <option value="Exemplo 1"  />
                <option value="Exemplo 2"  />
                <option value="Exemplo 3"  />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
             id="minutesAmount"
              type="number"
               step={5}
                min={5}
                 max={60}
                 placeholder="00" />
            <span>minutos.</span>
            
            </FormContainer>
            

            <CountdownContainer>
                <span>0</span>
                <span>0</span>
               
                <Separator>:</Separator>
                
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <StartCountdownButton  type='submit'><Play size={24}/> Começar</StartCountdownButton>
            </form>
        </HomeContainer>
    )
}