import { apolloMutation } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function MenuDisposition() {
  const state = useAppSelector((state: IReducer) => state.setting);
  const dispatch = useAppDispatch();
  const dispositions = [ "Magazine View","Title-Only View", "Cards View"];

  const changeDisposition = async (disposition: number) => {
    dispatch({ type: "setting/toggleLoading", payload: true });
    dispatch({ type: "feed/toggleLoading", payload: true });
    const res = await apolloMutation(`mutation{
      settingUpsert(input:{
        disposition: ${disposition},
      }){
        id
        disposition
      }
    }`);
    dispatch({ type: "setting/changeDisposition", payload: disposition });
    dispatch({ type: "setting/toggleLoading", payload: false });
    dispatch({ type: "feed/toggleLoading", payload: false });
  };

  return (
    <Box>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={state?.disposition ?? 2}
          name="radio-buttons-group"
          onChange={(e) => changeDisposition(parseInt(e.target.value))}
        >
          {dispositions.map((item, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MenuDisposition;
