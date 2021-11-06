import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './tabs.css';

export default function TabsComponent({ data }) {
  return (
    <div style={{ display: 'block' }}>
      <Tabs defaultActiveKey='1'>
        {data &&
          data.map((data) => {
            return (
              <Tab eventKey={data.id} title={data.title}>
                <div className='row'>
                  {data.locations.map((localtion) => {
                    return (
                      <div className='col-md-4 col-6 tabs-data'>
                        {localtion.name}
                      </div>
                    );
                  })}
                </div>
              </Tab>
            );
          })}
      </Tabs>
    </div>
  );
}
