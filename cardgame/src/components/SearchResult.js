import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const SearchResult = (props) => {
    return (
        <div>
            {
                props.data.map(cardObj => (
                    <div key={cardObj.id}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText key={cardObj.id} primary={cardObj.name} />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                    </div>
                    )
                )}
        </div>
    );
};
export default SearchResult;