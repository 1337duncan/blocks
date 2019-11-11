/** @module @airtable/blocks/ui: useViewMetadata */ /** */
import ViewMetadataQueryResult from '../models/view_metadata_query_result';
import View from '../models/view';
import useLoadable from './use_loadable';
import useWatchable from './use_watchable';

/** @hidden */
function useViewMetadata(
    viewOrViewMetadataQueryResult: View | ViewMetadataQueryResult,
): ViewMetadataQueryResult;
/** @hidden */
function useViewMetadata(viewOrViewMetadataQueryResult?: null | undefined): null;
/** @hidden */
function useViewMetadata(
    viewOrViewMetadataQueryResult?: View | ViewMetadataQueryResult | null | undefined,
): ViewMetadataQueryResult | null;

/**
 * Returns a {@link ViewMetadataQueryResult} for the specified view and re-renders whenever the
 * view metadata changes. Suspends if the view is not already loaded.
 *
 * @param viewOrViewMetadataQueryResult The {@link View} or {@link ViewMetadataQueryResult} to watch and use metadata from.
 * @returns Metadata for the specified view.
 *
 * @example
 * ```js
 * import {useBase, useViewMetadata} from '@airtable/blocks/ui';
 *
 * function ViewFields({view}) {
 *     const viewMetadata = useViewMetadata(view);
 *
 *     return (
 *         <ul>
 *             {viewMetadata.visibleFields.map(field => (
 *                 <li key={field.id}>{field.name}</li>
 *             ))}
 *         </ul>
 *     );
 * }
 * ```
 */
function useViewMetadata(
    viewOrViewMetadataQueryResult?: View | ViewMetadataQueryResult | null | undefined,
) {
    const queryResult =
        viewOrViewMetadataQueryResult instanceof View
            ? viewOrViewMetadataQueryResult.selectMetadata()
            : viewOrViewMetadataQueryResult;

    useLoadable(queryResult || null);
    useWatchable(queryResult, ['allFields', 'visibleFields']);

    return queryResult || null;
}

export default useViewMetadata;
