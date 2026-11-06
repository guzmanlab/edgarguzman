"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod/v3";

/**
 * @description TODO: write a brief description for jsdoc
 */
export function useZodForm<TSchema extends z.ZodTypeAny>(
    props: Omit<UseFormProps<
        z.input<TSchema>,
        any,
        z.output<TSchema>
    >, "resolver"> & {
        schema: TSchema,
    }
) {
    return useForm<
        z.input<TSchema>,
        any,
        z.output<TSchema>
    >({
        ...props,
        resolver: zodResolver(props.schema),
    });
}
