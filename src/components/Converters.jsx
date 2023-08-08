"use client";
import { AppConfig } from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Button } from "@mui/base";

export const Converters = () => {
  const { convert } = useContext(AppConfig);
  
  const [source, setSource] = useState();
  const [convertCopy, setConvertCopy] = useState([]);
  const [target, setTarget] = useState();
  const [amount, setAmount] = useState(0);
  const [quote, setQuote] = useState(0);
  const [EntityClipOpen, setEntityClipOpen] = useState(false);

  const handleEntityClipClose = () =>{
    setEntityClipOpen(false);
  }
  function getQuote(src, dsd) {
  
    setConvertCopy(convert);
    var amount = 0;
    if (src != "USD") {
      if (
        typeof convertCopy[src] == "undefined" ||
        typeof convertCopy[dsd] == "undefined"
      ) {
        return -1;
      }
      amount += 1 / convertCopy[src].price;
      amount += convertCopy[dsd].price;
      return amount;
    } else {
      if (typeof convertCopy[dsd] != "undefined") {
        return convertCopy[dsd].price;
      }
    }
    return -1;
  }

  const handleQuote = () => {
    if(source==target || amount==0){
        setEntityClipOpen(true)
        
    }
    else{
    var key = getQuote(source, target);
    setQuote(key * amount);
    }
  };
  useEffect(() => {
    setConvertCopy(convert);
  }, []);

  return (
    <div className="text-[#0A0634] w-[523px] h-[597px] m-3 rounded-lg p-6 bg-[#CCCCCC]">
          <Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert className='bg-red' onClose={handleEntityClipClose} severity="error" sx={{ width: '100%' ,color:'white',bgcolor:'red'}}>
        Same currency selected. Kindly choose different exchange currencies. And amount should not be zero
        </Alert>
      </Snackbar>
      <div className="font-inter text-[30px] text-center font-bold">
        Currency converter
      </div>
      <Box
        className="flex flex-row justify-center "
        alignItems={"center"}
        sx={{ minWidth: 240 }}
      >
        <FormControl>
          <div className="w-[454px]">Source Currency</div>
          {/* <InputLabel className='text-white w-full'>Source</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={source}
            label="source"
            className="bg-[#D9D9D9]"
            onChange={(event) => setSource(event.target.value)}
          >
            {Object.keys(convertCopy).map((item, k) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>

          <div className="w-[454px]">Target Currency</div>
          {/* <InputLabel className='text-white w-full'>Source</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={target}
            label="source"
            className="bg-[#D9D9D9]"
            onChange={(event) => setTarget(event.target.value)}
          >
            {Object.keys(convertCopy).map((item, k) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>

          <div className="w-[454px]">Amount</div>
          {/* <InputLabel className='text-white w-full'>Source</InputLabel> */}
          <TextField
            value={amount}
            className="bg-[#D9D9D9]"
            onChange={(event) => setAmount(event.target.value)}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <br />
          {quote === 0 ? (
            <>
              <div className="w-[452px] h-[104px] bg-[#D9D9D9]">
                <div className="text-center"></div>
              </div>
            </>
          ) : quote === -1 ? (
            <div className="w-[452px] h-[104px] bg-[#D9D9D9]">
              <div className="text-center">Quote Not Available</div>
            </div>
          ) : (
            <div className="w-[452px] h-[104px] bg-[#D9D9D9]">
              <div className="text-center">
                Estimated converted amount:{" "}
                <span className="text-green">{quote.toFixed(2)}</span>
              </div>
            </div>
          )}

          <br />
          {quote <= 0 ? (
            <Button
              className="bg-[#D9D9D9] text-lg font-inter font-bold text-blue-700 "
              onClick={handleQuote}
            >
              Get quote
            </Button>
          ) : (
            <>
           
            <br/>
              <Button className="bg-[#D9D9D9] font-inter text-lg font-bold text-blue-700 ">
              Exchange
            </Button>
            </>
          
          )}
        </FormControl>
      </Box>
    </div>
  );
};
