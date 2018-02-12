import React, { Compoenent } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Compoenent {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);

