// import {
//     createStyles,
//     fade,
//     Theme,
//     makeStyles,
//   } from '@material-ui/core/styles';
//   import React from 'react';
//   import SearchIcon from '@material-ui/icons/Search';
//   import InputBase from '@material-ui/core/InputBase';
//   import SearchBar from "material-ui-search-bar";
//   import { useState } from 'react';
  
//   const useStyles = makeStyles((theme) =>
//     createStyles({
//       search: {
//         position: 'relative',
//         // border : '1px solid black',
//         // borderRadius: '4px',
//         marginLeft: 0,
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//           marginLeft: theme.spacing(1),
//           height : "30px",
//           width: 'auto',
//         },
//       },
//     })
//   );
  
//   export default function SearchBarCompo() {
//     const classes = useStyles();
//     const [state, setstate] = useState("");
//     const onChangeHandler = (e)=>{
//         setstate(e.target.value);
//         console.log(e.target.value);
//     }
//     return (
//         <SearchBar className={classes.search}
//             value={state}
//             onChange={(e) => console.log('onChange')}
//             // onRequestSearch={() => doSomethingWith(this.state.value)}
//         />
    
//     );
//   }

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '0ch', //firt was 0
      height : "70%",
      '&:focus': {
        width: '87ch',
        height : "70%",
        border:"1px solid #5514B4",
        borderRadius : "2px"
      },
    },
  },
}));

export default function SearchBarCompo() {

    const [state, setstate] = useState("");

    const onChangeHandler = (e)=>{
        setstate(e.target.value);
        console.log(e.target.value);
    }

  return (
    <>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // placeholder="Search…"
              value={state}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChangeHandler}
            />
        </Search>
     </>  
  );
}


