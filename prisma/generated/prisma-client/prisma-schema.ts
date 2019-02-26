// Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateEvent {
  count: Int!
}

type AggregateOrganization {
  count: Int!
}

type AggregateSpeaker {
  count: Int!
}

type AggregateTalk {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  organization: Organization
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker!]
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk!]
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  organization: OrganizationCreateOneWithoutEventsInput
  speakers: SpeakerCreateManyWithoutEventsInput
  talks: TalkCreateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventCreateManyWithoutOrganizationInput {
  create: [EventCreateWithoutOrganizationInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutSpeakersInput {
  create: [EventCreateWithoutSpeakersInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutTalksInput {
  create: EventCreateWithoutTalksInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutOrganizationInput {
  speakers: SpeakerCreateManyWithoutEventsInput
  talks: TalkCreateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventCreateWithoutSpeakersInput {
  organization: OrganizationCreateOneWithoutEventsInput
  talks: TalkCreateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventCreateWithoutTalksInput {
  organization: OrganizationCreateOneWithoutEventsInput
  speakers: SpeakerCreateManyWithoutEventsInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  city_ASC
  city_DESC
  country_ASC
  country_DESC
  endDate_ASC
  endDate_DESC
  name_ASC
  name_DESC
  startDate_ASC
  startDate_DESC
  type_ASC
  type_DESC
  youtubePlaylist_ASC
  youtubePlaylist_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EventPreviousValues {
  id: ID!
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  endDate: String
  endDate_not: String
  endDate_in: [String!]
  endDate_not_in: [String!]
  endDate_lt: String
  endDate_lte: String
  endDate_gt: String
  endDate_gte: String
  endDate_contains: String
  endDate_not_contains: String
  endDate_starts_with: String
  endDate_not_starts_with: String
  endDate_ends_with: String
  endDate_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  startDate: String
  startDate_not: String
  startDate_in: [String!]
  startDate_not_in: [String!]
  startDate_lt: String
  startDate_lte: String
  startDate_gt: String
  startDate_gte: String
  startDate_contains: String
  startDate_not_contains: String
  startDate_starts_with: String
  startDate_not_starts_with: String
  startDate_ends_with: String
  startDate_not_ends_with: String
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  youtubePlaylist: String
  youtubePlaylist_not: String
  youtubePlaylist_in: [String!]
  youtubePlaylist_not_in: [String!]
  youtubePlaylist_lt: String
  youtubePlaylist_lte: String
  youtubePlaylist_gt: String
  youtubePlaylist_gte: String
  youtubePlaylist_contains: String
  youtubePlaylist_not_contains: String
  youtubePlaylist_starts_with: String
  youtubePlaylist_not_starts_with: String
  youtubePlaylist_ends_with: String
  youtubePlaylist_not_ends_with: String
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

enum EventType {
  MEETUP
  CONFERENCE
}

input EventUpdateInput {
  organization: OrganizationUpdateOneWithoutEventsInput
  speakers: SpeakerUpdateManyWithoutEventsInput
  talks: TalkUpdateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateManyDataInput {
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateManyMutationInput {
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateManyWithoutOrganizationInput {
  create: [EventCreateWithoutOrganizationInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutOrganizationInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutOrganizationInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithoutSpeakersInput {
  create: [EventCreateWithoutSpeakersInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutSpeakersInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutSpeakersInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneWithoutTalksInput {
  create: EventCreateWithoutTalksInput
  update: EventUpdateWithoutTalksDataInput
  upsert: EventUpsertWithoutTalksInput
  delete: Boolean
  disconnect: Boolean
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutOrganizationDataInput {
  speakers: SpeakerUpdateManyWithoutEventsInput
  talks: TalkUpdateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateWithoutSpeakersDataInput {
  organization: OrganizationUpdateOneWithoutEventsInput
  talks: TalkUpdateManyWithoutEventInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateWithoutTalksDataInput {
  organization: OrganizationUpdateOneWithoutEventsInput
  speakers: SpeakerUpdateManyWithoutEventsInput
  city: String
  country: String
  endDate: String
  name: String
  startDate: String
  type: EventType
  youtubePlaylist: String
}

input EventUpdateWithWhereUniqueWithoutOrganizationInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutOrganizationDataInput!
}

input EventUpdateWithWhereUniqueWithoutSpeakersInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutSpeakersDataInput!
}

input EventUpsertWithoutTalksInput {
  update: EventUpdateWithoutTalksDataInput!
  create: EventCreateWithoutTalksInput!
}

input EventUpsertWithWhereUniqueWithoutOrganizationInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutOrganizationDataInput!
  create: EventCreateWithoutOrganizationInput!
}

input EventUpsertWithWhereUniqueWithoutSpeakersInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutSpeakersDataInput!
  create: EventCreateWithoutSpeakersInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  organization: OrganizationWhereInput
  speakers_every: SpeakerWhereInput
  speakers_some: SpeakerWhereInput
  speakers_none: SpeakerWhereInput
  talks_every: TalkWhereInput
  talks_some: TalkWhereInput
  talks_none: TalkWhereInput
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  endDate: String
  endDate_not: String
  endDate_in: [String!]
  endDate_not_in: [String!]
  endDate_lt: String
  endDate_lte: String
  endDate_gt: String
  endDate_gte: String
  endDate_contains: String
  endDate_not_contains: String
  endDate_starts_with: String
  endDate_not_starts_with: String
  endDate_ends_with: String
  endDate_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  startDate: String
  startDate_not: String
  startDate_in: [String!]
  startDate_not_in: [String!]
  startDate_lt: String
  startDate_lte: String
  startDate_gt: String
  startDate_gte: String
  startDate_contains: String
  startDate_not_contains: String
  startDate_starts_with: String
  startDate_not_starts_with: String
  startDate_ends_with: String
  startDate_not_ends_with: String
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  youtubePlaylist: String
  youtubePlaylist_not: String
  youtubePlaylist_in: [String!]
  youtubePlaylist_not_in: [String!]
  youtubePlaylist_lt: String
  youtubePlaylist_lte: String
  youtubePlaylist_gt: String
  youtubePlaylist_gte: String
  youtubePlaylist_contains: String
  youtubePlaylist_not_contains: String
  youtubePlaylist_starts_with: String
  youtubePlaylist_not_starts_with: String
  youtubePlaylist_ends_with: String
  youtubePlaylist_not_ends_with: String
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createOrganization(data: OrganizationCreateInput!): Organization!
  updateOrganization(data: OrganizationUpdateInput!, where: OrganizationWhereUniqueInput!): Organization
  updateManyOrganizations(data: OrganizationUpdateManyMutationInput!, where: OrganizationWhereInput): BatchPayload!
  upsertOrganization(where: OrganizationWhereUniqueInput!, create: OrganizationCreateInput!, update: OrganizationUpdateInput!): Organization!
  deleteOrganization(where: OrganizationWhereUniqueInput!): Organization
  deleteManyOrganizations(where: OrganizationWhereInput): BatchPayload!
  createSpeaker(data: SpeakerCreateInput!): Speaker!
  updateSpeaker(data: SpeakerUpdateInput!, where: SpeakerWhereUniqueInput!): Speaker
  updateManySpeakers(data: SpeakerUpdateManyMutationInput!, where: SpeakerWhereInput): BatchPayload!
  upsertSpeaker(where: SpeakerWhereUniqueInput!, create: SpeakerCreateInput!, update: SpeakerUpdateInput!): Speaker!
  deleteSpeaker(where: SpeakerWhereUniqueInput!): Speaker
  deleteManySpeakers(where: SpeakerWhereInput): BatchPayload!
  createTalk(data: TalkCreateInput!): Talk!
  updateTalk(data: TalkUpdateInput!, where: TalkWhereUniqueInput!): Talk
  updateManyTalks(data: TalkUpdateManyMutationInput!, where: TalkWhereInput): BatchPayload!
  upsertTalk(where: TalkWhereUniqueInput!, create: TalkCreateInput!, update: TalkUpdateInput!): Talk!
  deleteTalk(where: TalkWhereUniqueInput!): Talk
  deleteManyTalks(where: TalkWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Organization {
  id: ID!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  twitterHandle: String
  website: String
  youtubeChannel: String
}

type OrganizationConnection {
  pageInfo: PageInfo!
  edges: [OrganizationEdge]!
  aggregate: AggregateOrganization!
}

input OrganizationCreateInput {
  events: EventCreateManyWithoutOrganizationInput
  twitterHandle: String
  website: String
  youtubeChannel: String
}

input OrganizationCreateOneWithoutEventsInput {
  create: OrganizationCreateWithoutEventsInput
  connect: OrganizationWhereUniqueInput
}

input OrganizationCreateWithoutEventsInput {
  twitterHandle: String
  website: String
  youtubeChannel: String
}

type OrganizationEdge {
  node: Organization!
  cursor: String!
}

enum OrganizationOrderByInput {
  id_ASC
  id_DESC
  twitterHandle_ASC
  twitterHandle_DESC
  website_ASC
  website_DESC
  youtubeChannel_ASC
  youtubeChannel_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrganizationPreviousValues {
  id: ID!
  twitterHandle: String
  website: String
  youtubeChannel: String
}

type OrganizationSubscriptionPayload {
  mutation: MutationType!
  node: Organization
  updatedFields: [String!]
  previousValues: OrganizationPreviousValues
}

input OrganizationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrganizationWhereInput
  AND: [OrganizationSubscriptionWhereInput!]
  OR: [OrganizationSubscriptionWhereInput!]
  NOT: [OrganizationSubscriptionWhereInput!]
}

input OrganizationUpdateInput {
  events: EventUpdateManyWithoutOrganizationInput
  twitterHandle: String
  website: String
  youtubeChannel: String
}

input OrganizationUpdateManyMutationInput {
  twitterHandle: String
  website: String
  youtubeChannel: String
}

input OrganizationUpdateOneWithoutEventsInput {
  create: OrganizationCreateWithoutEventsInput
  update: OrganizationUpdateWithoutEventsDataInput
  upsert: OrganizationUpsertWithoutEventsInput
  delete: Boolean
  disconnect: Boolean
  connect: OrganizationWhereUniqueInput
}

input OrganizationUpdateWithoutEventsDataInput {
  twitterHandle: String
  website: String
  youtubeChannel: String
}

input OrganizationUpsertWithoutEventsInput {
  update: OrganizationUpdateWithoutEventsDataInput!
  create: OrganizationCreateWithoutEventsInput!
}

input OrganizationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  twitterHandle: String
  twitterHandle_not: String
  twitterHandle_in: [String!]
  twitterHandle_not_in: [String!]
  twitterHandle_lt: String
  twitterHandle_lte: String
  twitterHandle_gt: String
  twitterHandle_gte: String
  twitterHandle_contains: String
  twitterHandle_not_contains: String
  twitterHandle_starts_with: String
  twitterHandle_not_starts_with: String
  twitterHandle_ends_with: String
  twitterHandle_not_ends_with: String
  website: String
  website_not: String
  website_in: [String!]
  website_not_in: [String!]
  website_lt: String
  website_lte: String
  website_gt: String
  website_gte: String
  website_contains: String
  website_not_contains: String
  website_starts_with: String
  website_not_starts_with: String
  website_ends_with: String
  website_not_ends_with: String
  youtubeChannel: String
  youtubeChannel_not: String
  youtubeChannel_in: [String!]
  youtubeChannel_not_in: [String!]
  youtubeChannel_lt: String
  youtubeChannel_lte: String
  youtubeChannel_gt: String
  youtubeChannel_gte: String
  youtubeChannel_contains: String
  youtubeChannel_not_contains: String
  youtubeChannel_starts_with: String
  youtubeChannel_not_starts_with: String
  youtubeChannel_ends_with: String
  youtubeChannel_not_ends_with: String
  AND: [OrganizationWhereInput!]
  OR: [OrganizationWhereInput!]
  NOT: [OrganizationWhereInput!]
}

input OrganizationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  organization(where: OrganizationWhereUniqueInput!): Organization
  organizations(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organization]!
  organizationsConnection(where: OrganizationWhereInput, orderBy: OrganizationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganizationConnection!
  speaker(where: SpeakerWhereUniqueInput!): Speaker
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker]!
  speakersConnection(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeakerConnection!
  talk(where: TalkWhereUniqueInput!): Talk
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk]!
  talksConnection(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TalkConnection!
  node(id: ID!): Node
}

type Speaker {
  id: ID!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk!]
  name: String!
  twitterHandle: String
}

type SpeakerConnection {
  pageInfo: PageInfo!
  edges: [SpeakerEdge]!
  aggregate: AggregateSpeaker!
}

input SpeakerCreateInput {
  events: EventCreateManyWithoutSpeakersInput
  talks: TalkCreateManyWithoutSpeakersInput
  name: String!
  twitterHandle: String
}

input SpeakerCreateManyWithoutEventsInput {
  create: [SpeakerCreateWithoutEventsInput!]
  connect: [SpeakerWhereUniqueInput!]
}

input SpeakerCreateManyWithoutTalksInput {
  create: [SpeakerCreateWithoutTalksInput!]
  connect: [SpeakerWhereUniqueInput!]
}

input SpeakerCreateWithoutEventsInput {
  talks: TalkCreateManyWithoutSpeakersInput
  name: String!
  twitterHandle: String
}

input SpeakerCreateWithoutTalksInput {
  events: EventCreateManyWithoutSpeakersInput
  name: String!
  twitterHandle: String
}

type SpeakerEdge {
  node: Speaker!
  cursor: String!
}

enum SpeakerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  twitterHandle_ASC
  twitterHandle_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpeakerPreviousValues {
  id: ID!
  name: String!
  twitterHandle: String
}

input SpeakerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  twitterHandle: String
  twitterHandle_not: String
  twitterHandle_in: [String!]
  twitterHandle_not_in: [String!]
  twitterHandle_lt: String
  twitterHandle_lte: String
  twitterHandle_gt: String
  twitterHandle_gte: String
  twitterHandle_contains: String
  twitterHandle_not_contains: String
  twitterHandle_starts_with: String
  twitterHandle_not_starts_with: String
  twitterHandle_ends_with: String
  twitterHandle_not_ends_with: String
  AND: [SpeakerScalarWhereInput!]
  OR: [SpeakerScalarWhereInput!]
  NOT: [SpeakerScalarWhereInput!]
}

type SpeakerSubscriptionPayload {
  mutation: MutationType!
  node: Speaker
  updatedFields: [String!]
  previousValues: SpeakerPreviousValues
}

input SpeakerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpeakerWhereInput
  AND: [SpeakerSubscriptionWhereInput!]
  OR: [SpeakerSubscriptionWhereInput!]
  NOT: [SpeakerSubscriptionWhereInput!]
}

input SpeakerUpdateInput {
  events: EventUpdateManyWithoutSpeakersInput
  talks: TalkUpdateManyWithoutSpeakersInput
  name: String
  twitterHandle: String
}

input SpeakerUpdateManyDataInput {
  name: String
  twitterHandle: String
}

input SpeakerUpdateManyMutationInput {
  name: String
  twitterHandle: String
}

input SpeakerUpdateManyWithoutEventsInput {
  create: [SpeakerCreateWithoutEventsInput!]
  delete: [SpeakerWhereUniqueInput!]
  connect: [SpeakerWhereUniqueInput!]
  set: [SpeakerWhereUniqueInput!]
  disconnect: [SpeakerWhereUniqueInput!]
  update: [SpeakerUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [SpeakerUpsertWithWhereUniqueWithoutEventsInput!]
  deleteMany: [SpeakerScalarWhereInput!]
  updateMany: [SpeakerUpdateManyWithWhereNestedInput!]
}

input SpeakerUpdateManyWithoutTalksInput {
  create: [SpeakerCreateWithoutTalksInput!]
  delete: [SpeakerWhereUniqueInput!]
  connect: [SpeakerWhereUniqueInput!]
  set: [SpeakerWhereUniqueInput!]
  disconnect: [SpeakerWhereUniqueInput!]
  update: [SpeakerUpdateWithWhereUniqueWithoutTalksInput!]
  upsert: [SpeakerUpsertWithWhereUniqueWithoutTalksInput!]
  deleteMany: [SpeakerScalarWhereInput!]
  updateMany: [SpeakerUpdateManyWithWhereNestedInput!]
}

input SpeakerUpdateManyWithWhereNestedInput {
  where: SpeakerScalarWhereInput!
  data: SpeakerUpdateManyDataInput!
}

input SpeakerUpdateWithoutEventsDataInput {
  talks: TalkUpdateManyWithoutSpeakersInput
  name: String
  twitterHandle: String
}

input SpeakerUpdateWithoutTalksDataInput {
  events: EventUpdateManyWithoutSpeakersInput
  name: String
  twitterHandle: String
}

input SpeakerUpdateWithWhereUniqueWithoutEventsInput {
  where: SpeakerWhereUniqueInput!
  data: SpeakerUpdateWithoutEventsDataInput!
}

input SpeakerUpdateWithWhereUniqueWithoutTalksInput {
  where: SpeakerWhereUniqueInput!
  data: SpeakerUpdateWithoutTalksDataInput!
}

input SpeakerUpsertWithWhereUniqueWithoutEventsInput {
  where: SpeakerWhereUniqueInput!
  update: SpeakerUpdateWithoutEventsDataInput!
  create: SpeakerCreateWithoutEventsInput!
}

input SpeakerUpsertWithWhereUniqueWithoutTalksInput {
  where: SpeakerWhereUniqueInput!
  update: SpeakerUpdateWithoutTalksDataInput!
  create: SpeakerCreateWithoutTalksInput!
}

input SpeakerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  talks_every: TalkWhereInput
  talks_some: TalkWhereInput
  talks_none: TalkWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  twitterHandle: String
  twitterHandle_not: String
  twitterHandle_in: [String!]
  twitterHandle_not_in: [String!]
  twitterHandle_lt: String
  twitterHandle_lte: String
  twitterHandle_gt: String
  twitterHandle_gte: String
  twitterHandle_contains: String
  twitterHandle_not_contains: String
  twitterHandle_starts_with: String
  twitterHandle_not_starts_with: String
  twitterHandle_ends_with: String
  twitterHandle_not_ends_with: String
  AND: [SpeakerWhereInput!]
  OR: [SpeakerWhereInput!]
  NOT: [SpeakerWhereInput!]
}

input SpeakerWhereUniqueInput {
  id: ID
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  organization(where: OrganizationSubscriptionWhereInput): OrganizationSubscriptionPayload
  speaker(where: SpeakerSubscriptionWhereInput): SpeakerSubscriptionPayload
  talk(where: TalkSubscriptionWhereInput): TalkSubscriptionPayload
}

type Talk {
  id: ID!
  event: Event
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker!]
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String!
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

type TalkConnection {
  pageInfo: PageInfo!
  edges: [TalkEdge]!
  aggregate: AggregateTalk!
}

input TalkCreateInput {
  event: EventCreateOneWithoutTalksInput
  speakers: SpeakerCreateManyWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String!
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkCreateManyWithoutEventInput {
  create: [TalkCreateWithoutEventInput!]
  connect: [TalkWhereUniqueInput!]
}

input TalkCreateManyWithoutSpeakersInput {
  create: [TalkCreateWithoutSpeakersInput!]
  connect: [TalkWhereUniqueInput!]
}

input TalkCreateWithoutEventInput {
  speakers: SpeakerCreateManyWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String!
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkCreateWithoutSpeakersInput {
  event: EventCreateOneWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String!
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

type TalkEdge {
  node: Talk!
  cursor: String!
}

enum TalkOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  duration_ASC
  duration_DESC
  hidden_ASC
  hidden_DESC
  private_ASC
  private_DESC
  publishedAt_ASC
  publishedAt_DESC
  source_ASC
  source_DESC
  title_ASC
  title_DESC
  thumbnailUrl_ASC
  thumbnailUrl_DESC
  videoUrl_ASC
  videoUrl_DESC
  viewCount_ASC
  viewCount_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TalkPreviousValues {
  id: ID!
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String!
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  hidden: Boolean
  hidden_not: Boolean
  private: Boolean
  private_not: Boolean
  publishedAt: DateTime
  publishedAt_not: DateTime
  publishedAt_in: [DateTime!]
  publishedAt_not_in: [DateTime!]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  source: VideoSource
  source_not: VideoSource
  source_in: [VideoSource!]
  source_not_in: [VideoSource!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  thumbnailUrl: String
  thumbnailUrl_not: String
  thumbnailUrl_in: [String!]
  thumbnailUrl_not_in: [String!]
  thumbnailUrl_lt: String
  thumbnailUrl_lte: String
  thumbnailUrl_gt: String
  thumbnailUrl_gte: String
  thumbnailUrl_contains: String
  thumbnailUrl_not_contains: String
  thumbnailUrl_starts_with: String
  thumbnailUrl_not_starts_with: String
  thumbnailUrl_ends_with: String
  thumbnailUrl_not_ends_with: String
  videoUrl: String
  videoUrl_not: String
  videoUrl_in: [String!]
  videoUrl_not_in: [String!]
  videoUrl_lt: String
  videoUrl_lte: String
  videoUrl_gt: String
  videoUrl_gte: String
  videoUrl_contains: String
  videoUrl_not_contains: String
  videoUrl_starts_with: String
  videoUrl_not_starts_with: String
  videoUrl_ends_with: String
  videoUrl_not_ends_with: String
  viewCount: Int
  viewCount_not: Int
  viewCount_in: [Int!]
  viewCount_not_in: [Int!]
  viewCount_lt: Int
  viewCount_lte: Int
  viewCount_gt: Int
  viewCount_gte: Int
  AND: [TalkScalarWhereInput!]
  OR: [TalkScalarWhereInput!]
  NOT: [TalkScalarWhereInput!]
}

type TalkSubscriptionPayload {
  mutation: MutationType!
  node: Talk
  updatedFields: [String!]
  previousValues: TalkPreviousValues
}

input TalkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TalkWhereInput
  AND: [TalkSubscriptionWhereInput!]
  OR: [TalkSubscriptionWhereInput!]
  NOT: [TalkSubscriptionWhereInput!]
}

input TalkUpdateInput {
  event: EventUpdateOneWithoutTalksInput
  speakers: SpeakerUpdateManyWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkUpdateManyDataInput {
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkUpdateManyMutationInput {
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkUpdateManyWithoutEventInput {
  create: [TalkCreateWithoutEventInput!]
  delete: [TalkWhereUniqueInput!]
  connect: [TalkWhereUniqueInput!]
  set: [TalkWhereUniqueInput!]
  disconnect: [TalkWhereUniqueInput!]
  update: [TalkUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [TalkUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [TalkScalarWhereInput!]
  updateMany: [TalkUpdateManyWithWhereNestedInput!]
}

input TalkUpdateManyWithoutSpeakersInput {
  create: [TalkCreateWithoutSpeakersInput!]
  delete: [TalkWhereUniqueInput!]
  connect: [TalkWhereUniqueInput!]
  set: [TalkWhereUniqueInput!]
  disconnect: [TalkWhereUniqueInput!]
  update: [TalkUpdateWithWhereUniqueWithoutSpeakersInput!]
  upsert: [TalkUpsertWithWhereUniqueWithoutSpeakersInput!]
  deleteMany: [TalkScalarWhereInput!]
  updateMany: [TalkUpdateManyWithWhereNestedInput!]
}

input TalkUpdateManyWithWhereNestedInput {
  where: TalkScalarWhereInput!
  data: TalkUpdateManyDataInput!
}

input TalkUpdateWithoutEventDataInput {
  speakers: SpeakerUpdateManyWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkUpdateWithoutSpeakersDataInput {
  event: EventUpdateOneWithoutTalksInput
  description: String
  duration: Int
  hidden: Boolean
  private: Boolean
  publishedAt: DateTime
  source: VideoSource
  title: String
  thumbnailUrl: String
  videoUrl: String
  viewCount: Int
}

input TalkUpdateWithWhereUniqueWithoutEventInput {
  where: TalkWhereUniqueInput!
  data: TalkUpdateWithoutEventDataInput!
}

input TalkUpdateWithWhereUniqueWithoutSpeakersInput {
  where: TalkWhereUniqueInput!
  data: TalkUpdateWithoutSpeakersDataInput!
}

input TalkUpsertWithWhereUniqueWithoutEventInput {
  where: TalkWhereUniqueInput!
  update: TalkUpdateWithoutEventDataInput!
  create: TalkCreateWithoutEventInput!
}

input TalkUpsertWithWhereUniqueWithoutSpeakersInput {
  where: TalkWhereUniqueInput!
  update: TalkUpdateWithoutSpeakersDataInput!
  create: TalkCreateWithoutSpeakersInput!
}

input TalkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  event: EventWhereInput
  speakers_every: SpeakerWhereInput
  speakers_some: SpeakerWhereInput
  speakers_none: SpeakerWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  duration: Int
  duration_not: Int
  duration_in: [Int!]
  duration_not_in: [Int!]
  duration_lt: Int
  duration_lte: Int
  duration_gt: Int
  duration_gte: Int
  hidden: Boolean
  hidden_not: Boolean
  private: Boolean
  private_not: Boolean
  publishedAt: DateTime
  publishedAt_not: DateTime
  publishedAt_in: [DateTime!]
  publishedAt_not_in: [DateTime!]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  source: VideoSource
  source_not: VideoSource
  source_in: [VideoSource!]
  source_not_in: [VideoSource!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  thumbnailUrl: String
  thumbnailUrl_not: String
  thumbnailUrl_in: [String!]
  thumbnailUrl_not_in: [String!]
  thumbnailUrl_lt: String
  thumbnailUrl_lte: String
  thumbnailUrl_gt: String
  thumbnailUrl_gte: String
  thumbnailUrl_contains: String
  thumbnailUrl_not_contains: String
  thumbnailUrl_starts_with: String
  thumbnailUrl_not_starts_with: String
  thumbnailUrl_ends_with: String
  thumbnailUrl_not_ends_with: String
  videoUrl: String
  videoUrl_not: String
  videoUrl_in: [String!]
  videoUrl_not_in: [String!]
  videoUrl_lt: String
  videoUrl_lte: String
  videoUrl_gt: String
  videoUrl_gte: String
  videoUrl_contains: String
  videoUrl_not_contains: String
  videoUrl_starts_with: String
  videoUrl_not_starts_with: String
  videoUrl_ends_with: String
  videoUrl_not_ends_with: String
  viewCount: Int
  viewCount_not: Int
  viewCount_in: [Int!]
  viewCount_not_in: [Int!]
  viewCount_lt: Int
  viewCount_lte: Int
  viewCount_gt: Int
  viewCount_gte: Int
  AND: [TalkWhereInput!]
  OR: [TalkWhereInput!]
  NOT: [TalkWhereInput!]
}

input TalkWhereUniqueInput {
  id: ID
}

enum VideoSource {
  YOUTUBE
  VIMEO
}
`