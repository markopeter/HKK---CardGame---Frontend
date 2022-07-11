import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const SearchResult = (props) => {
    return (
        <div>
            {
                props.data.map(cardObj => (
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={cardObj.name} />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                    )
                )}
        </div>
    );
};
export default SearchResult;