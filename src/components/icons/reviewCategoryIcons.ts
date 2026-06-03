import type { Component } from 'vue';
import { markRaw } from 'vue';
import { ReviewCategory } from '../../domain/Enums';
import IconMapPin from './IconMapPin.vue';
import IconHome from './IconHome.vue';
import IconUsers from './IconUsers.vue';
import IconRent from './IconRent.vue';
import IconLayoutGrid from './IconLayoutGrid.vue';
import IconCalendar from './IconCalendar.vue';

export const reviewCategoryIcons: Record<ReviewCategory, Component> = {
  [ReviewCategory.Location]: markRaw(IconMapPin),
  [ReviewCategory.Property]: markRaw(IconHome),
  [ReviewCategory.Housemates]: markRaw(IconUsers),
  [ReviewCategory.Rent]: markRaw(IconRent),
  [ReviewCategory.RoomLayout]: markRaw(IconLayoutGrid),
  [ReviewCategory.StartDate]: markRaw(IconCalendar),
};
