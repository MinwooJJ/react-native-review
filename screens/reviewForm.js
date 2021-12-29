import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm({ addReview }) {
  return (
    // actions을 통하여 submit 후 하고 싶은 동작을 정의 할 수 있음
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              autoCapitalize="none"
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />
            <TextInput
              autoCapitalize="none"
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />
            <TextInput
              autoCapitalize="none"
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
