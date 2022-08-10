/* eslint-disable prettier/prettier */
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        list="taskSuggestions"
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
      />

      <datalist id="taskSuggestions">
        <option value="Exemplo 1" />
        <option value="Exemplo 2" />
        <option value="Exemplo 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        id="minutesAmount"
        type="number"
        step={5}
        min={5}
        max={60}
        placeholder="00"
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
