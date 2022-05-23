import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Button,
} from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const warehouseList = ['test', 'test2'];
  const [currentWarehouse, setCurrentWarehouse] = useState(warehouseList[0]);
  const [newWarehouseName, setNewWarehouseName] = useState('');
  const [newWarehouseAddress, setNewWarehouseAddress] = useState('');

  const switchWarehouse = (event) => {
    setCurrentWarehouse(event.target.value);
  };

  const addWarehouse = () => {};

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          width: isMobile ? '100%' : '500px',
          padding: '10px',
          marginTop: '50px',
        }}
      >
        <h1 style={{ margin: '10px' }}>
          Shopify Developer Intern Challenge - 2022
        </h1>

        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          Created by{' '}
          <Link href='https://www.satrajit.ca' target='_blank' underline='none'>
            <span
              style={{
                backgroundColor: 'black',
                padding: '6px',
                borderRadius: '6px',
                color: 'white',
              }}
            >
              @satrajit
            </span>
          </Link>
        </div>

        <FormControl size='small' style={{ margin: '10px', marginTop: '20px' }}>
          <InputLabel id='select-small'>Warehouse</InputLabel>
          <div style={{ minWidth: '100%' }}>
            <Select
              value={currentWarehouse}
              label='Warehouse'
              onChange={switchWarehouse}
              style={{ width: '200px' }}
            >
              {warehouseList.map((w) => (
                <MenuItem value={w}>{w}</MenuItem>
              ))}
            </Select>
          </div>
        </FormControl>

        <Box
          style={{
            backgroundColor: '#FFFFFF',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
            border: 'solid 2px #000000',
            borderRadius: '4px',
            margin: '10px',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              textAlign: 'right',
              marginTop: '20px',
              marginLeft: 'auto',
            }}
          >
            <Button
              disableElevation
              variant='outlined'
              onClick={() => {
                addWarehouse();
              }}
            >
              Add Warehouse
            </Button>
          </div>
        </Box>

        <Box
          style={{
            backgroundColor: '#FFFFFF',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
            border: 'solid 2px #000000',
            borderRadius: '4px',
            margin: '10px',
            marginTop: '30px',
          }}
        >
          asd
        </Box>
      </Box>
    </div>
  );
}

export default App;
