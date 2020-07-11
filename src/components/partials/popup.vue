<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add a new article</v-btn>
      </template>
      <v-card>
        <v-card-title>
          
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  ref="form"
                  label="Title"
                  v-model="title"
                  :rules="inputruless"
                  prepend-icon="mdi-folder"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  ref="form"
                  label="Article"
                  :rules="inputrules"
                  v-model="content"
                  prepend-icon="mdi-pencil"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" lg="6">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      ref="form"
                      :rules="daterules"
                      :value="computedDateFormattedMomentjs"
                      clearable
                      label="Due date"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            v-on:click="
              submit()
              showAlert()
            "
            @click="dialog = false"
          >
            Submit
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
