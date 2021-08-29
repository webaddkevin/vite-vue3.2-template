import {
  mapGetters,
  mapState,
  Mapper,
  MapperWithNamespace,
  MapperForState,
  MapperForStateWithNamespace,
  Computed,
  MapperForActionWithNamespace,
  MutationMethod,
  mapMutations,
  mapActions,
  MapperForMutationWithNamespace,
  MapperForMutation,
  ActionMethod,
  MapperForAction,
} from 'vuex';
import { ComputedRef, computed } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';

const createActionHook = (
  mapFunction: Mapper<any> & MapperWithNamespace<any>
) =>
  ((...args: [any, any]) => {
    const $store = inject('store');

    return Object.fromEntries(
      Object.entries(mapFunction(...args)).map(
        ([key, value]: [string, any]) => [
          key,
          value.bind({
            $store,
          }),
        ]
      )
    );
  }) as Mapper<any> & MapperWithNamespace<any>;

export const useMutation = createActionHook(
  mapMutations
) as Mapper<MutationMethod> &
  MapperWithNamespace<MutationMethod> &
  MapperForMutation &
  MapperForMutationWithNamespace;

export const useActions = createActionHook(mapActions) as Mapper<ActionMethod> &
  MapperWithNamespace<ActionMethod> &
  MapperForAction &
  MapperForActionWithNamespace;

const createComputedHook = (
  mapFunction: Mapper<Computed> & MapperWithNamespace<Computed>
) =>
  ((...args: [any, any]) => {
    const $store = inject('store');

    return Object.fromEntries(
      Object.entries(mapFunction(...args)).map(
        ([key, value]: [string, Computed]) => [
          key,
          computed(
            value.bind({
              $store,
            })
          ),
        ]
      )
    );
  }) as Mapper<ComputedRef<any>> & MapperWithNamespace<ComputedRef<any>>;

export const useGetters = createComputedHook(mapGetters) as Mapper<
  ComputedRef<any>
> &
  MapperWithNamespace<ComputedRef<any>>;

export const useState = createComputedHook(mapState) as Mapper<
  ComputedRef<any>
> &
  MapperWithNamespace<ComputedRef<any>> &
  MapperForState &
  MapperForStateWithNamespace;
