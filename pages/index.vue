<template>
  <div>
    <v-card>
      <v-row class="pa-2" no-gutters>
        <div class="pa-2 col-6">
          <v-card outlined>
            <v-card-title> Add group </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="groupName"
                label="Name"
                hide-details
                dense
                outlined
              />
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                outlined
                :disabled="!groupName"
                @click="
                  $store.dispatch('counters/addGroup', { name: groupName })
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="pa-2 col-6">
          <v-card outlined>
            <v-card-title> Add counter </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="counterPreview.name"
                label="Name"
                hide-details
                dense
                outlined
              />
              <v-text-field
                v-model="counterPreview.weight"
                type="Number"
                label="Weight"
                class="my-4"
                hide-details
                dense
                outlined
              />
              <v-select
                v-model="selectedGroup"
                :items="availableGroups"
                label="Group"
                hide-details
                dense
                outlined
              />
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                outlined
                :disabled="
                  !counterPreview.name ||
                  !counterPreview.weight ||
                  counterPreview.weight == 0 ||
                  !selectedGroup
                "
                @click="
                  $store.dispatch('counters/addCounter', {
                    groupId: selectedGroup,
                    counterPreview,
                  })
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-row>
    </v-card>
    <v-row class="pa-2" no-gutters>
      <v-card v-for="group in groups" :key="group.id" outlined class="pa-2">
        <v-card-title>
          {{ group.name }}
        </v-card-title>
        <v-card-text>
          <v-card v-for="counter in group.counters" :key="counter.id" outlined>
            <v-card-title>
              {{ counter.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ counter.weight }}
            </v-card-subtitle>
            <v-card-text>
              <span> {{ counter.value }} </span>
              <span> {{ counter.totalWeight }}</span>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                @click="
                  $store.dispatch('counters/incrementCounter', {
                    groupId: group.id,
                    counterId: counter.id,
                  })
                "
              >
                +1
              </v-btn>
              <v-btn
                @click="
                  $store.dispatch('counters/decrementCounter', {
                    groupId: group.id,
                    counterId: counter.id,
                  })
                "
              >
                -1
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      groupName: "",
      selectedGroup: null,
      counterPreview: {
        name: "",
        weight: null,
      },
    };
  },
  computed: {
    groups() {
      return this.$store.state.counters.groups;
    },
    availableGroups() {
      return Object.keys(this.groups).map((key) => ({
        text: this.groups[key].name,
        value: key,
      }));
    },
  },
};
</script>
