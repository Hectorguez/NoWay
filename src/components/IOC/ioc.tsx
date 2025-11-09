import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import './index.css'

export type IOCType = "ip" | "url" | "domain";

export type IOC = {
  ioc_value: string;
  type: IOCType;
  ioc_name: string;
};

export const IOC: React.FC<IOC> = ({ ioc_value, type, ioc_name }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className='ioc-list'>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={
          <>
            {ioc_value}
            {type}
          </>
        } className='inbox-text' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className='ioc-sublist'>
          <ListItemButton sx={{ pl: 7 }}>
            <ListItemText primary={
              <>
                {ioc_name}
              </>
            } className='starred-text' />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}