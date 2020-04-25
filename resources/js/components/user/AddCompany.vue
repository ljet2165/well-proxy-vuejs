<template>
  <v-row justify="end">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add Company</v-btn>
      </template>
      <v-card>
        <v-card-title justify="end">
          <v-row justify="center">Add Company</v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Company Name" hide-details outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Vat Number" hide-details outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Address" hide-details outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Phone" hide-details outlined></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="default" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>
