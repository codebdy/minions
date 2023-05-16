import {
  IConfigMeta,
  IActivityDefine,
  IReactionNodeData,
  ActivityType
} from './meta';
import { IActivity } from './logicflow';

export type ActivityFactory<IActivityFactoryOptions = unknown> = (
  meta: IActivityDefine<IConfigMeta>,
  options: IActivityFactoryOptions
) => IActivity;

export interface IActivityMaterial<ComponentNode = unknown, NodeSchema = unknown> {
  //唯一名称
  name: string;
  label: string;
  reactionType: ActivityType;
  icon?: ComponentNode;
  color?: string;
  //reaction?: IActivity,
  schema?: NodeSchema;
  meta?: IReactionNodeData;
  subTitle?: (config?: IConfigMeta) => string | undefined;
  activityName?: string;
}

export interface ActivityMaterialCategory<ComponentNode = unknown> {
  name: string;
  materials: IActivityMaterial<ComponentNode>[];
}
